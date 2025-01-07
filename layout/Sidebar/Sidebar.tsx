import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SidebarProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> { }

export const Sidebar: React.FC<SidebarProps> = ({ ...props }: SidebarProps) => {
  return (
    <div {...props}>
      Sidebar
    </div>
  );
};