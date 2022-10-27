import { MagnifyingGlassPlus, GameController } from "phosphor-react"
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    useDisclosure,
    Button,
} from '@chakra-ui/react'

export function CreateAdBanner() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <div className='pt-1 bg-nlw-gradient self-stretch rounded-lg mt-8 overflow-hidden'>
            <div className='bg-[#2A2634] px-8 py-6 flex justify-between items-center'>
                <div>
                    <strong className='text-2xl text-white font-black block'>Não encontrou seu duo?</strong>
                    <span className='text-zinc-400 block'>Publique um novo anúncio para encontrar novos players!</span>
                </div>
                <button onClick={onOpen} className='py-3 px-4 bg-violet-500 flex gap-3 text-white rounded items-center hover:bg-violet-600 hover:duration-300'><MagnifyingGlassPlus /> Publicar anúncio!</button>
            </div>
            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent
                    color='white'
                    backgroundColor='#2A2634'>
                    <ModalHeader>Adicione um anúncio</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <form>
                            <label className="block mt-2" htmlFor="game">Qual o game?</label>
                            <input className="block px-4 mt-2 w-[100%] h-10 bg-[#0f0c16]" type="text" placeholder="digite o game que deseja jogar" name="game" />
                            <label className="block mt-2" htmlFor="name">Seu nome (ou nickname)</label>
                            <input className="block  px-4 mt-2 w-[100%] h-10 bg-[#0f0c16]" type="text" placeholder="Como te chamar dentro do game" name="name" />
                            <div className="flex gap-6 w-full mt-2">
                                <div>
                                    <label className="block" htmlFor="name">Joga a quantos anos?</label>
                                    <input className="block  px-4 w-full mt-2 h-10 bg-[#0f0c16]" type="text" placeholder="tudo bem ser ZERO" name="yearsPlaying" />
                                </div>
                                <div>
                                    <label className="block" htmlFor="name">Qual o seu Discord?</label>
                                    <input className="block  px-4 w-[196px] mt-2 h-10 bg-[#0f0c16]" type="text" placeholder="usuário#0000" name="discord" />
                                </div>
                            </div>
                            <div className="flex gap-6 w-full">
                                <div className=" w-1/2 mt-2">
                                    <p className="block">Quando costuma jogar?</p>
                                    <div className="grid grid-cols-4 mt-2 gap-1">
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">D</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">S</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">T</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">Q</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">Q</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">S</button>
                                    <button className="bg-[#0f0c16] rounded w-7 h-7">S</button>
                                    </div>
                                </div>
                                <div className="w-1/2 mt-2">
                                    <p className="block mt-">Qual horário do dia?</p>
                                    <div className="grid grid-cols-2 gap-4 mt-2">
                                        <input className="w-20 h-10 bg-[#0f0c16] px-4 rounded" type="time" />
                                        <input className="w-20 h-10 bg-[#0f0c16] px-4 rounded " type="time" />
                                    </div>

                                </div>
                               
                            </div>
                            <div className="mt-2">
                            <input type="checkbox" /> Costumo me conectar no chat de voz
                            </div>
                        </form>
                    </ModalBody>

                    <ModalFooter>
                        <button className="p-2 rounded mr-3 px-5 bg-zinc-500" onClick={onClose}>
                            Cancelar
                        </button>
                        <button className="bg-violet-700 flex items-center gap-2 p-2 rounded"><GameController/> Encontrar duo</button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </div>

    )
}