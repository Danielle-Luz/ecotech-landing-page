import * as yup from "yup"

const formSchema = yup.object({
  consumption: yup.number().required().default(0),
  energyBill: yup.number().required().default(0),
  space: yup.number().required().default(0)
}).required().default(0);

export default formSchema;