import { DEVNET_NETWORK } from "@/constants/devnet";
import { ContractCallRegularOptions, FinishedTxData, request } from "@stacks/connect";
import {
  makeContractCall,
  broadcastTransaction,
  SignedContractCallOptions,
  ClarityValue,
  PostCondition,
  PostConditionMode,
} from "@stacks/transactions";
import { generateWallet } from "@stacks/wallet-sdk";
import { DevnetWallet } from "./devnet-wallet-context";

interface DirectCallResponse {
  txid: string;
}

export const isDevnetEnvironment = () =>
  process.env.NEXT_PUBLIC_STACKS_NETWORK === "devnet";

export const isTestnetEnvironment = () =>
  process.env.NEXT_PUBLIC_STACKS_NETWORK === "testnet";

export const isMainnetEnvironment = () =>
  process.env.NEXT_PUBLIC_STACKS_NETWORK === "mainnet";

export type Network = "mainnet" | "testnet" | "devnet";

export const executeContractCall = async (
  txOptions: ContractCallRegularOptions,
  currentWallet: DevnetWallet | null
): Promise<DirectCallResponse> => {
  const mnemonic = currentWallet?.mnemonic;
  if (!mnemonic) throw new Error("Devnet wallet not configured");

  const wallet = await generateWallet({
    secretKey: mnemonic,
    password: "password",
  });

  const contractCallTxOptions: SignedContractCallOptions = {
    ...txOptions,
    network: DEVNET_NETWORK,
    senderKey: wallet.accounts[0].stxPrivateKey,
    functionArgs: txOptions.functionArgs as ClarityValue[],
    postConditions: txOptions.postConditions as PostCondition[],
    postConditionMode: PostConditionMode.Allow,
    fee: 1000,
  };

  const transaction = await makeContractCall(contractCallTxOptions);

  const response = await broadcastTransaction({
    transaction,
    network: contractCallTxOptions.network,
  });

  if ("error" in response) {
    console.error(response.error);
    throw new Error(response.error || "Transaction failed");
  }

  return { txid: response.txid };
};


export const openContractCall = async (options: ContractCallRegularOptions) => {
  try {
    const contract = `${options.contractAddress}.${options.contractName}`;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const params: any = {
      contract,
      functionName: options.functionName,
      functionArgs: options.functionArgs,
      network:
        typeof options.network === 'object'
          ? 'chainId' in options.network
            ? options.network.chainId === 1
              ? 'mainnet'
              : 'testnet'
            : options.network
          : options.network,
      postConditions: options.postConditions,
      postConditionMode: options.postConditionMode === PostConditionMode.Allow ? 'allow' : 'deny',
      sponsored: options.sponsored,
    };

    const result = await request({}, 'stx_callContract', params);

    if (options.onFinish) {
      options.onFinish({ txId: result.txid } as unknown as FinishedTxData);
    }

    return result;
  } catch (error: unknown) {
    console.error('Failed to execute contract call:', error);
    if (error instanceof Error && error.message?.includes('cancelled') && options.onCancel) {
      options.onCancel();
    }
    throw error;
  }
};
