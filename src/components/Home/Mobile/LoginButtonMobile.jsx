import { Button } from "@chakra-ui/react"

export function LoginButtonMobile(props) {
    return (
        <Button
            variant="outline"
            borderColor="#181818"
            color="#181818"
            padding="20px 35px"
            fontSize="20px"
            w="40vw"
            onClick={() => props.push("/login")}
            _active={false}
            boxShadow="dark-lg"
            fontWeight="700"
            _hover={{
                textDecoration: "underline"
            }}
        >
            Login
        </Button>
    )
}
