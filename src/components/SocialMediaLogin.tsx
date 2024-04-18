import { FunctionComponent } from "react";

export type SocialMediaLoginType = {
  orSignUpWith?: string;
  image?: string;
  image1?: string;
  image2?: string;
};

const SocialMediaLogin: FunctionComponent<SocialMediaLoginType> = ({
  orSignUpWith,
  image,
  image1,
  image2,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start gap-[0.625rem] text-left text-[1rem] text-dark font-archivo">
      <div className="self-stretch relative tracking-[0.02em] leading-[1.625rem]">
        {orSignUpWith}
      </div>
      <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-[0rem] pr-[0.25rem] pl-[0rem] gap-[0.875rem_0.75rem] text-center text-light-text">
        <div className="flex-1 rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[1.562rem] pr-[0.812rem] pl-[0.818rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-contain"
            loading="lazy"
            alt=""
            src={image}
          />
          <div className="self-stretch relative tracking-[0.24px]">Google</div>
        </div>
        <div className="flex-[0.5663] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[1.562rem] px-[2.562rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-contain"
            alt=""
            src={image1}
          />
          <div className="relative tracking-[0.24px] inline-block min-w-[4.563rem]">
            Facebook
          </div>
        </div>
        <div className="flex-[0.9992] rounded-lg bg-whitesmoke-100 flex flex-col items-center justify-start py-[1.562rem] px-[0.818rem] box-border gap-[1.125rem] min-w-[7.813rem]">
          <img
            className="w-[2.5rem] h-[2.531rem] relative object-contain"
            alt=""
            src={image2}
          />
          <div className="self-stretch relative tracking-[0.24px]">Apple</div>
        </div>
      </div>
    </div>
  );
};

export default SocialMediaLogin;
