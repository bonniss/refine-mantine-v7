import WithTransition from '@/components/shared/WithTransition';
import {
  Alert,
  Box,
  Button,
  Checkbox,
  Container,
  Paper,
  PasswordInput,
  Stack,
  TextInput,
  Title,
} from '@mantine/core';
import { useLogin, useNotification, useTranslate } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import { IconInfoCircle } from '@tabler/icons-react';

const defaultUser = {
  email: 'demo@refine.dev',
  password: 'demodemo',
};

interface LoginVM {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export const Login = () => {
  const t = useTranslate();
  const { mutate: login } = useLogin<LoginVM>();

  const {
    refineCore: { formLoading, onFinish },
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { open: openNoti } = useNotification();

  const doSubmit: typeof onFinish = async (formData) => {
    login(formData as LoginVM, {
      onSuccess: (data) => {
        if (!data.success) {
          const { error } = data;
          if (error instanceof Error) {
            openNoti?.({
              type: 'error',
              // description: `${error?.status} - ${error?.statusText}`,
              message: error.message,
            });
          }
        }
      },
    });
  };

  return (
    <Container size={500} h="100vh">
      <WithTransition transition="pop">
        <Stack py="20%">
          <Title order={2} ta="center">
            {t('pages.login.title')}
          </Title>
          <Paper withBorder shadow="md" p="lg" radius="md">
            <Alert
              mb="lg"
              variant="transparent"
              color="blue"
              title={t('pages.login.demohint')}
              icon={<IconInfoCircle />}
            />
            <Box component="form" mb="lg" onSubmit={handleSubmit(doSubmit)}>
              <Stack gap="md">
                <TextInput
                  {...register('username', { required: true })}
                  label={t('pages.admin.login')}
                  placeholder={t('pages.admin.login')}
                  withAsterisk
                  autoFocus
                  disabled={formLoading}
                  error={
                    errors?.username &&
                    t('validation.required', {
                      field: t('pages.admin.login'),
                    })
                  }
                />
                <PasswordInput
                  {...register('password', { required: true })}
                  label={t('pages.login.fields.password')}
                  placeholder={t('pages.login.fields.password')}
                  withAsterisk
                  disabled={formLoading}
                  error={
                    errors?.password &&
                    t('validation.required', {
                      field: t('pages.login.fields.password'),
                    })
                  }
                />
                <Checkbox
                  {...register('rememberMe')}
                  label={t('pages.login.buttons.rememberMe')}
                  disabled={formLoading}
                />
                <Button type="submit">{t('pages.login.buttons.submit')}</Button>
              </Stack>
            </Box>
          </Paper>
        </Stack>
      </WithTransition>
    </Container>
  );
};
