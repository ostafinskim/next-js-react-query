/**
  *  In the provided code, we have included the 'use client' pragma at the top of the file. 
  * This pragma establishes a boundary between Server and Client Component modules. 
  * Consequently, all other modules imported into it, including client components, 
  * are recognized as part of the client bundle.
 */ 
'use client';

import queryClient from "@/utils/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function ReactQueryProvider({ children}: React.PropsWithChildren){
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false}/>
    </QueryClientProvider>
  )
}

export default ReactQueryProvider;