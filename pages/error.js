import logo from '../public/wayni.png'
import Image from 'next/image'

const divStyles = {
  backgroundColor: '#f9f8f7',
  height: 'inherit',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  textAlign: 'center',
  fontSize: '.625rem'
}

export default function Error() {
  return (
    <div style={divStyles}>
      <Image src={logo} alt='waynimovil logo' />
      <h1>Ups, este contenido aún no se encuentra disponible :(</h1>
    </div>
  )
}