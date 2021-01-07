import React from 'react';

interface UseRequestAttrs {
  request: (payload: any) => Promise<any>;
  onSuccess: (result: any) => void;
  onError?: (result: any) => void;
}

export const useRequest = <R extends {}>({ request, onSuccess, onError }: UseRequestAttrs) => {

  const [errors, setErrors] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);

  const doRequest = async (props?: R) => {
    setLoading(true)
    try {
      setErrors(null);

      const response = await request(props)

      if (onSuccess) {
        onSuccess(response?.data);
      }

      return response.data;
    } catch (err) {
      setLoading(false)
      onError && onError(err);
      setErrors(
        <div className="alert alert-danger">
          <h4>Ooops.....</h4>
          <ul className="my-0">
            <li key={err.message}>{err.response.data.message}</li>
          </ul>
        </div>,
      );
    }
  };

  return {
    doRequest,
    errors,
    loading,
  };
};
