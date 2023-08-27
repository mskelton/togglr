"use client"

import { PlusIcon } from "@heroicons/react/24/solid"
import {
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react"
import Submit from "@/app/components/Submit"
import { addFlag } from "./actions"
import AddFlagFields from "./AddFlagFields"

export default function AddFlag() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()

  return (
    <>
      <Button
        className="justify-self-end"
        color="primary"
        onPress={onOpen}
        startContent={<PlusIcon className="w-5 h-5" />}
      >
        Add Flag
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <form
              action={async (formData) => {
                await addFlag(formData)
                onClose()
              }}
            >
              <ModalHeader className="flex flex-col gap-1">
                Add Flag
              </ModalHeader>

              <ModalBody>
                <AddFlagFields />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" onPress={onClose} variant="flat">
                  Close
                </Button>

                <Submit color="primary">Save</Submit>
              </ModalFooter>
            </form>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
