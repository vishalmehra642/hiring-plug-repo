import { useMutation, useQueryClient } from "react-query";
import { endpoints } from "utils/endpoints";
import http from "utils/http";

const PostData = (postData) => {
  return http().post(endpoints, postData);
};

export function usePostData() {
  const queryClient = useQueryClient();
  return useMutation(PostData, {
    onSuccess: () => {
      queryClient.invalidateQueries(["PostData"]);
    },
    onError: (errorData) => {
      const errorMessage = errorData?.error?.message || errorData?.message;
      alert(errorMessage);
    },
  });
}
