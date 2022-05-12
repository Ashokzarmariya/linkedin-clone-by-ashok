import React from 'react'
import { getProviders, signIn } from "next-auth/react"

interface provider {
    name: string,
    id: string
}
interface props {
    providers: provider[]

}


const signin = ({ providers }: props) => {
    return (
        <>
        
            {Object.values(providers).map((provider) => (

                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, { callbackUrl:'/'})}>
                        Sign in with {provider.name}
                    </button>
                </div>
            ))}
        </>
    )
}

export default signin

export async function getServerSideProps() {
    const providers = await getProviders()
    return {
        props: { providers },
    }
}
