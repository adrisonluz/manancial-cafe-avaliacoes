import Image from 'next/image';
import type { ComponentProps } from 'react';

// A imagem precisa ser colocada em public/assets/images/manancial-cafe.png
const logoSrc = '/assets/images/manancial-cafe.png';

const Logo = (props: Omit<ComponentProps<typeof Image>, 'src' | 'alt'>) => (
  <Image
    src={logoSrc}
    alt="Manancial Café logo"
    width={200}
    height={200}
    priority
    {...props}
  />
);

export default Logo;
