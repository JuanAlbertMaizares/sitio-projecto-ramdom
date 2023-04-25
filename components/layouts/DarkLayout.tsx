import { FC, PropsWithChildren } from "react"
// type Props = {
//     children: React.ReactNode
// }

export const DarkLayout: FC<PropsWithChildren> = ({ children }) => {
    return (
        <>
            <div style={{
                backgroundColor: 'rgba(0,0,0,0.3)',
            }}>
                <h3>Dark-Layout</h3>
                <div>
                    {children}
                </div>
            </div>
        </>
    )
}
