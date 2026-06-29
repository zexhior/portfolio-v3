import { client } from "@/lib/api";
import { useMutation, type UseMutationResult } from "@tanstack/react-query";

interface Message {
  messages: string;
  email: string;
  name: string;
}

export const useSendMessage = (): UseMutationResult<Message, unknown, Message> => {
  return useMutation<Message, unknown, Message>({
    mutationKey: [],
    mutationFn: async (message: Message) => {
      const result = await client.post<Message>("api/message/", message);
      return result.data;
    },
  });
};
