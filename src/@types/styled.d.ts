import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    // Define your theme properties here
  }
}

// Fix for styled-components with React 17
declare module 'styled-components' {
  export interface StyledComponentBase<C, T, O, A> {
    (props: any): React.ReactElement<any, any> | null;
  }
}
