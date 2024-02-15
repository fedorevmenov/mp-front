import { useCallback, useRef, useState } from "react"
import { useOnClickOutside } from 'helpers/hooks'
import { DropdownWrapper, Wrapper } from "./styled"


interface I_DropdownPanel {
    toggler: (props: any) => React.ReactElement
    children: React.ReactElement
    toLeft?: boolean
}

const DropdownPanel: React.FC<I_DropdownPanel> = ({
    toggler,
    children,
    toLeft = false,
}: I_DropdownPanel) => {

    const dropdownWrapperRef = useRef(null)
    const [isVisible, setVisible] = useState<boolean>(false)

    const toggleVisibility = useCallback(() => {
        setVisible((isVisible) => !isVisible)
    }, [])

    useOnClickOutside(dropdownWrapperRef, toggleVisibility)

    const Toggler = toggler



    return (



        <Wrapper>
            <Toggler onclick={toggleVisibility} />
            {isVisible && (
                <DropdownWrapper
                    ref={dropdownWrapperRef}
                    toLeft={toLeft}
                >
                    {children}
                </DropdownWrapper>
            )}
        </Wrapper>
    )
}

export default DropdownPanel

