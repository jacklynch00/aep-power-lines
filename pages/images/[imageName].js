import {useRouter} from "next/router";
import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import ImageReviewTableHeader from "@/components/ImageReviewTableHeader";
import ImageReviewView from "@/components/ImageReviewView";
import ImageReviewViewSkeleton from "@/components/ImageReviewViewSkeleton";
import {useAuth} from "@/lib/auth";
import fetcher from "@/utils/fetcher";

const ImageReview = () => {
  const auth = useAuth();
  const router = useRouter();
  const {imageName} = router.query;
  const {data, error} = useSWR(
    `/api/poleImage?imageName=${imageName}`,
    fetcher
  );

  if (!data) {
    return (
      <DashboardShell>
        <ImageReviewTableHeader />
        <ImageReviewViewSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <ImageReviewTableHeader />
      <ImageReviewView poleInfo={{imageName, ...data}} />
    </DashboardShell>
  );
};

export default ImageReview;
