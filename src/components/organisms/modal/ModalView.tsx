import NoButton from '@/components/atoms/button/modal/NoButton';
import YesButton from '@/components/atoms/button/modal/YesButton';
import useDeviceType from '@/hooks/useDeviceType';
import { container } from '@/styles/animations';
import { ModalViewProps } from '@/types/Modal';
import { motion } from 'framer-motion';
import React from 'react';

const ModalView = ({ children, isOpen, noBtn, yesBtn, ...props }: ModalViewProps) => {
  const deviceType = useDeviceType();
  return (
    <>
      <motion.div
        variants={container}
        initial='hidden'
        animate='show'
        exit='exit'
        className={`fixed h-screen flex items-center justify-center bg-[#00000060] z-modal transition-all ${
          deviceType === 'mobile' ? 'w-screen' : 'w-max px-40'
        }`}
      >
        <div className='rounded-16 min-h-fit bg-white'>
          {children}
          <div className='mb-16 flex items-center justify-center'>
            {noBtn && yesBtn && (
              <div className=' flex items-center w-full justify-center medium-medium'>
                <NoButton info={noBtn.info} handler={() => noBtn.handler()} />
                <YesButton isOne={false} info={yesBtn.info} handler={() => yesBtn.handler()} />
              </div>
            )}
            {!noBtn && yesBtn && <YesButton isOne={true} info={yesBtn.info} handler={() => yesBtn.handler()} />}
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default ModalView;
