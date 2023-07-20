import * as yup from 'yup';

export const deliveryValidationSchema = yup.object().shape({
  status: yup.string().required(),
  delivery_driver_id: yup.string().nullable(),
  order_id: yup.string().nullable(),
});
