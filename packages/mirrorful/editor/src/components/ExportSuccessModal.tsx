import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text,
  Button,
  Box,
  Icon,
  Code,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Link
} from '@chakra-ui/react'
import { FiCheckCircle } from 'react-icons/fi'
import 'highlight.js/styles/atom-one-dark.css'
import { CodePreview } from './CodePreview'

export function ExportSuccessModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean
  onClose: () => void
}) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <Box css={{ display: 'flex', alignItems: 'center' }}>
            <Icon
              as={FiCheckCircle}
              color="green.400"
              css={{ marginRight: 8 }}
            />
            Your Tokens are Ready!
          </Box>
        </ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <Text css={{ marginBottom: '24px' }}>
            Your tokens can now be imported by your app.
          </Text>
          <Tabs>
            <TabList>
              <Tab>HTML / SCSS</Tab>
              <Tab>Javascript / Typescript</Tab>
            </TabList>

            <TabPanels>
              <TabPanel>
                <Text css={{ marginBottom: 8 }}>
                  <span style={{ fontWeight: 'bold' }}>1.</span> Import{' '}
                  <Code>theme.css</Code>
                </Text>
                <CodePreview language='javascript' textClass='code-snippet' text={`import './.mirrorful/theme.css'`} />
                <Text css={{ marginTop: 12, marginBottom: 8 }}>
                  <span style={{ fontWeight: 'bold' }}>2.</span> Your CSS
                  Variables can now be accessed anywhere in your app!
                </Text>
                <CodePreview language='css' textClass='code-snippet' text={`.primary-button {\n    background-color: var(--color-primary);\n}\n\n.primary-button:hover {\n    background-color: var(--color-primary-hover);\n}`} />
              </TabPanel>
              <TabPanel>
                <Text css={{ marginBottom: 8 }}>
                  <span style={{ fontWeight: 'bold' }}>1.</span> Import{' '}
                  <Code>Tokens</Code>
                </Text>

                <CodePreview language='javascript' textClass='code-snippet' text={`import { Tokens } from './.mirrorful/theme'`} />

                <Text css={{ marginTop: 12, marginBottom: 8 }}>
                  <span style={{ fontWeight: 'bold' }}>2.</span> Use your tokens
                  anywhere as constants!
                </Text>
                <CodePreview language='javascript' textClass='code-snippet' text={`<Button\n   style={{ backgroundColor: Tokens.primary.base}}\n   _hover={{ backgroundColor: Tokens.primary.hover }}\n   _active={{ backgroundColor: Tokens.primary.active }}\n>\n   Click here\n</Button>`} />
              </TabPanel>
            </TabPanels>
          </Tabs>
          <Text css={{ marginTop: '12px' }}>
            To learn more about how to import these generated files, visit our{' '}
            <Link
              isExternal
              color="blue.500"
              href="https://github.com/Mirrorful/mirrorful"
            >
              documentation here.
            </Link>
          </Text>
        </ModalBody>

        <ModalFooter>
          <Button
            onClick={() => {
              onClose()
            }}
            colorScheme="blue"
          >
            Done
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
