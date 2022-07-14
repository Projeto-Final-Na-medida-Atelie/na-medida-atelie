import {
    Textarea,
    Input,
    InputGroup,
    Select,
    InputRightAddon
} from "@chakra-ui/react"
import {
    FormSection,
    PedidosCard,
    PedidosContainer
} from "../../pages/Pedidos/style"

export function MainPedidos(props) {
    return (
        <PedidosContainer>
            <PedidosCard>
                <h2>Peça</h2>
                <FormSection direction="column">
                    <label>Modelagem</label>
                    <Select
                        minH="29px"
                        h="5vh"
                        bg="var(--Grey-1)"
                        borderColor="var(--Grey-4)"
                        borderWidth="2px"
                        placeholder="Selecione uma opção"
                        {...props.register("modelagem")}
                    >
                        <option value="feminina">Feminina</option>
                        <option value="masculina">Masculina</option>
                    </Select>
                </FormSection>
                <FormSection direction="column">
                    <label>Tipo de peça</label>
                    <Select
                        minH="29px"
                        h="5vh"
                        bg="var(--Grey-1)"
                        borderColor="var(--Grey-4)"
                        borderWidth="2px"
                        placeholder="Selecione uma opção"
                        {...props.register("categoria")}
                    >
                        <option value="Blusa">Blusa</option>
                        <option value="Vestido">Vestido</option>
                        <option value="Saia">Saia</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Calça">Calça</option>
                        <option value="Camiseta">Camiseta</option>
                        <option value="Regata">Regata</option>
                        <option value="Short">Short</option>
                        <option value="Moletom">Moletom</option>
                        <option value="Jaqueta">Jaqueta</option>
                        <option value="Agasalho">Agasalho</option>
                    </Select>
                </FormSection>
                <FormSection direction="column">
                    <label>Imagem de referência</label>
                    <Input
                        minH="29px"
                        h="7vh"
                        padding="0 16px"
                        bg="var(--Grey-1)"
                        borderColor="var(--Grey-4)"
                        borderWidth="2px"
                        placeholder="URL do site"
                        {...props.register("imagem_referencia")}
                    />
                </FormSection>
                <FormSection direction="column" flex="1">
                    <label>Observações sobre o modelo</label>
                    <Textarea
                        h="5vh"
                        placeholder="Insira detalhes adicionais que deseja no modelo escolhido..."
                        resize="none"
                        flex="1"
                        bg="var(--Grey-1)"
                        borderColor="var(--Grey-4)"
                        borderWidth="2px"
                        {...props.register("observacoes")}
                    />
                </FormSection>
            </PedidosCard>
            <PedidosCard>
                <h2>Medidas - Circunferências</h2>
                <FormSection>
                    <label>Busto / Tórax</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("torax_busto")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Cintura</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("cintura")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Quadril</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("quadril")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Braço (Biceps)</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("biceps")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Punho</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("punho")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Coxa</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("coxa")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Joelho</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("joelho")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection type="medidas">
                    <label>Tornozelo</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("tornozelo")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
            </PedidosCard>
            <PedidosCard>
                <h2>Medidas Adicionais</h2>
                <FormSection>
                    <label>Largura Ombro</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("ombro")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Comp. Total</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("comprimento_total")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection>
                    <label>Comp. Manga</label>
                    <InputGroup
                        d="flex"
                        justifyContent="flex-end"
                        w="50%"
                        h="5vh"
                        minH="29px"
                    >
                        <Input
                            bg="var(--Grey-1)"
                            borderColor="var(--Grey-4)"
                            borderWidth="2px"
                            textAlign="right"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            {...props.register("comprimento_manga")}
                        />
                        <InputRightAddon
                            bg="var(--Grey-4)"
                            borderWidth="2px"
                            borderColor="var(--Grey-4)"
                            color="var(--Grey-1)"
                            children="cm"
                            h="70%"
                            alignSelf="center"
                            p="4px"
                            fontSize="14px"
                        />
                    </InputGroup>
                </FormSection>
                <FormSection direction="column" flex="1">
                    <label>Outras medidas que julgar necessárias:</label>
                    <Textarea
                        resize="none"
                        flex="1"
                        bg="var(--Grey-1)"
                        borderColor="var(--Grey-4)"
                        borderWidth="2px"
                        {...props.register("observacoes")}
                    />
                </FormSection>
            </PedidosCard>
        </PedidosContainer>
    )
}
