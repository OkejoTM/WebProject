import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { ApiService } from "../../data/apiService";

const withAuth = (WrappedComponent: React.ComponentType) => {
  return (props: any) => {
    const router = useRouter();
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
      // Устанавливаем, что компонент работает только на клиенте
      setIsClient(true);

      const token = ApiService.getToken();
      if (!token) {
        router.replace("/login"); // Перенаправляем на страницу логина
      }
    }, [router]);

    // Показываем компонент только на клиентской стороне
    if (!isClient) {
      return null; // Возвращаем пустое состояние до монтирования
    }

    return <WrappedComponent {...props} />;
  };
};

export default withAuth;
