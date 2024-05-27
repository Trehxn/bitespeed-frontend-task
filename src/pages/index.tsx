import BaseLayout from "@/layouts/BaseLayout";
import Flow from "@/components/Flow";

// base home page component that is rendered when visited on "/" route
export default function Home() {
  return (
    <BaseLayout>
      <Flow />
    </BaseLayout>
  );
}
