export interface IUser{
  name: string;
}
export interface ICompany{
  company_name: string;
}
export interface IImproveOptions{
  description: string;
}

export interface IFormData{
  rate_slider_one: number,
  rate_slider_one_comment: string,
  rate_slider_two: number,

  to_improve:{
    improve:string,
    comment:string,
  },

  extra_feedback:string,
}