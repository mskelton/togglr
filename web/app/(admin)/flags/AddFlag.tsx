'use client'

import { PlusIcon } from '@heroicons/react/24/solid'
import {
  Button,
  Checkbox,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  Textarea,
  useDisclosure,
} from '@nextui-org/react'
import { useState } from 'react'

export default function AddFlag() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure()
  const [slug, setSlug] = useState('')

  return (
    <>
      <Button
        className="justify-self-end"
        color="primary"
        startContent={<PlusIcon className="w-5 h-5" />}
        onPress={onOpen}
      >
        Add Flag
      </Button>

      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Add Flag
              </ModalHeader>

              <ModalBody>
                <Input name="name" autoFocus label="Name" variant="bordered" />
                <Input name="slug" label="Slug" variant="bordered" />
                <Textarea
                  name="description"
                  label="Description"
                  variant="bordered"
                />
              </ModalBody>

              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>

                <Button color="primary" onPress={onClose}>
                  Save
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  )
}
