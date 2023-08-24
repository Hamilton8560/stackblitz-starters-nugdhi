export interface NewWidget {
  id?: string;
  name: string;
  description?: string;
  price: number;
  color: 'RED' | 'BLUE' | 'GREEN';
  sale: boolean;
}

export interface Widget extends NewWidget {
  id: string;
}
