'use client';
import Image from 'next/image';
import React, { useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import parse from 'html-react-parser';

interface ServiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: any;
  selectModal: number;
}

const ServiceModal: React.FC<ServiceModalProps> = ({
  isOpen,
  onClose,
  data,
  selectModal,
}) => {
  // Close modal when clicking outside content
  const handleBackdropClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  // Close modal with ESC key
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
    } else {
      window.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const modalData = data?.find((el: any, index: any) => index === selectModal);

  return (
    <div
      className='fixed inset-0 z-50 flex items-start justify-center  overflow-y-auto bg-black bg-opacity-50'
      onClick={handleBackdropClick}
      aria-hidden='true'
    >
      <div className='relative w-full max-w-2xl p-4'>
        <div className='relative rounded-lg bg-slate-900'>
          <div className='flex items-center justify-between  border-gray-800 p-4 md:p-5'>
            <button
              onClick={onClose}
              type='button'
              className='ms-auto inline-flex h-8 w-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 '
            >
              <FaTimes className='h-4 w-4' />
            </button>
          </div>
          <div className='!mt-0 space-y-4 p-4 !pt-0 md:p-10'>
            <div className='overflow-hidden rounded-[8px] lg:rounded-[30px]'>
              <Image
                src={modalData?.img}
                alt={modalData?.title}
                width={850}
                height={560}
              ></Image>
            </div>
            <div className='my-4 border-b-2 border-b-gray-800 pb-4 md:my-6 md:pb-6'>
              <h3 className='text-3xl font-semibold  text-white'>
                {modalData?.title}
              </h3>
            </div>
            <div> {parse(modalData?.desc)}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceModal;
