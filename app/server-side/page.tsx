import useUsersQuery from '@/hooks/use-users-query';
import {
  HydrationBoundary,
  QueryClient,
  dehydrate,
} from '@tanstack/react-query';
import { useSupabaseServer } from '@/hooks/useSupabaseServer';
import { cookies } from 'next/headers';
import ListUsers from '@/components/list-users';
import UserForm from '@/components/user-form';

export default function Hydation() {
  const queryClient = new QueryClient();
  const cookieStore = cookies();
  const supabase = useSupabaseServer(cookieStore);

  const usersQuery = useUsersQuery(supabase);

  queryClient.prefetchQuery({
    queryKey: usersQuery.queryKey,
    queryFn: usersQuery.queryFn,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <main style={{ maxWidth: 1200, marginInline: 'auto', padding: 20 }}>
        <div className='w-full flex justify-center mb-8'>
          <UserForm />
        </div>
        <ListUsers />
      </main>
    </HydrationBoundary>
  );
}