/* eslint-disable react-hooks/exhaustive-deps */
import { Flex, Image } from "@chakra-ui/react"
import logo from "../../assets/Images/logo.svg"

import semImagem from "../../assets/Images/no-image.svg"

import { StyledHeader } from "./style.js"

import { useHistory } from "react-router-dom"

import { useContext } from "react"
import { UserContext } from "../../providers/user"
import { useEffect } from "react"

function ThemeHeader({ admin }) {
    const { pegarDadosUser, user } = useContext(UserContext)

    const history = useHistory()

    useEffect(() => {
        pegarDadosUser()
    }, [])

    return (
        <StyledHeader>
            <Flex
                w="90%"
                maxW="1280px"
                h="full"
                flexFlow="row nowrap"
                justifyContent="space-between"
                alignItems="center"
            >
                <Image
                    src={logo}
                    alt="Na medida ateliê"
                    w={{ base: "78.55px", sm: "126.75px" }}
                    h={{ base: "38.88", sm: "52.08px" }}
                    sx={{
                        cursor: "pointer",
                        transition: "0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01)",
                        "&:hover": {
                            transform: "scale(1.1)",
                            transition:
                                "0.5s cubic-bezier(0.68, 0.09, 0.33, 1.01)"
                        }
                    }}
                    onClick={() => history.push("/")}
                />

                {!!user && (
                    <Flex
                        h="full"
                        flexFlow="row nowrap"
                        alignItems="center"
                        gap="9px"
                    >
                        <span>{user?.name?.split(" ")[0]}</span>

                        <span className="restoNome">
                            {user?.name?.split(" ")?.slice(1)?.join(" ")}
                        </span>

                        <Image
                            src={user?.avatar !== "" ? user.avatar : semImagem}
                            w={{ base: "30px", sm: "50px" }}
                            h={{ base: "30px", sm: "50px" }}
                            objectFit="cover"
                            borderRadius="100%"
                        />
                    </Flex>
                )}
                {!!admin && (
                    <Flex
                        h="full"
                        flexFlow="row nowrap"
                        alignItems="center"
                        gap="9px"
                    >
                        <span>Admin</span>

                        <Image
                            src={semImagem}
                            w={{ base: "30px", sm: "50px" }}
                            h={{ base: "30px", sm: "50px" }}
                            objectFit="cover"
                            borderRadius="100%"
                        />
                    </Flex>
                )}
            </Flex>
        </StyledHeader>
    )
}

export default ThemeHeader
