interface RequestArguments {
    method: string;
    params?: unknown[] | object;
}

interface Window {
    ethereum?: {
      on: (event: string, callback: () => void) => void;
      request: (args: RequestArguments) => Promise<unknown>;
      selectedAddress: string | null
    };
}