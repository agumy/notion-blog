import styled from 'styled-components'

const DOM = ({ className }: { className?: string }) => (
  <footer className={className}>
    <span>created by Agumy</span>
  </footer>
)

const Footer = styled(DOM)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 80px;
  color: #e5faff;
`

export default Footer
