import useSWR from "swr";

import DashboardShell from "@/components/DashboardShell";
import EmptyState from "@/components/EmptyState";
import PoleTable from "@/components/PoleTable";
import PoleTableSkeleton from "@/components/PoleTableSkeleton";
import {useAuth} from "@/lib/auth";
import fetcher from "@/utils/fetcher";
import DashboardTableHeader from "@/components/DashboardTableHeader";

const Dashboard = () => {
  const auth = useAuth();

  const {data, error} = useSWR("/api/poles", fetcher);

  if (!data && !error) {
    return (
      <DashboardShell>
        <DashboardTableHeader />
        <PoleTableSkeleton />
      </DashboardShell>
    );
  }

  return (
    <DashboardShell>
      <DashboardTableHeader />
      {data && data.length > 0 ? <PoleTable poles={data} /> : <EmptyState />}
    </DashboardShell>
  );
};

export default Dashboard;
