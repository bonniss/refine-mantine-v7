import { Button, Checkbox, Paper, PasswordInput, TextInput } from '@mantine/core';
import { useLogin, useNotification, useTranslate } from '@refinedev/core';
import { useForm } from '@refinedev/react-hook-form';
import clsx from 'clsx';

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
    <div
      className={clsx(
        'animate-fade-up',
        'fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-sm space-y-4'
      )}
    >
      <h2 className="text-3xl font-bold text-center">{t('pages.login.title')}</h2>
      <Paper withBorder shadow="md" p="lg" radius="md">
        <p className="p-4 text-sky-700 dark:text-sky-400 italic font-semibold">
          {t('pages.login.demohint')}
        </p>
        <form className="space-y-6" onSubmit={handleSubmit(doSubmit)}>
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
          <Button fullWidth type="submit">
            {t('pages.login.buttons.submit')}
          </Button>
        </form>
      </Paper>
    </div>
  );
};
