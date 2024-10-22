import isBoolean from '@/lib/utils/typechecking/is-boolean';
import {
  Box,
  BoxComponentProps,
  PolymorphicComponentProps,
  Transition,
  TransitionProps,
} from '@mantine/core';
import { useMounted } from '@mantine/hooks';
import { FunctionComponent, PropsWithChildren } from 'react';

interface WithTransitionProps
  extends Omit<TransitionProps, 'children' | 'mounted'>,
    PropsWithChildren {
  mounted?: boolean;
  as?: keyof JSX.IntrinsicElements;
}

const WithTransition: FunctionComponent<WithTransitionProps> = ({
  children,
  mounted: _mounted,
  as: _component,
  ...props
}) => {
  let isMounted = useMounted();
  if (isBoolean(_mounted)) {
    isMounted = _mounted;
  }
  const com = (_component ?? 'div') as PolymorphicComponentProps<
    'div',
    BoxComponentProps
  >['component'];

  return (
    <Transition mounted={isMounted} {...props}>
      {(styles) => (
        <Box component={com} style={styles}>
          {children}
        </Box>
      )}
    </Transition>
  );
};

export default WithTransition;
