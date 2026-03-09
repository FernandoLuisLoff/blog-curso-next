'use cliente';

import { Bounce, ToastContainer } from "react-toastify";

export function TostifyContainer() {
    return (
        <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            pauseOnHover
            theme="light"
            transition={Bounce}
        />
    )
}