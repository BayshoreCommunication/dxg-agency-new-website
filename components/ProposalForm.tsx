'use client';

import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';

import { useEffect, useState } from 'react';
const Modal = ({ onRequestClose }: any) => {
  useEffect(() => {
    constructDiv_74722();
    showZForm_74722();
  });

  useEffect(() => {
    function onKeyDown(event: { keyCode: number }) {
      if (event.keyCode === 27) {
        // Close the modal when the Escape key is pressed
        onRequestClose();
      }
    }

    // Prevent scolling
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', onKeyDown);

    // Clear things up when unmounting this component
    return () => {
      document.body.style.overflow = 'visible';
      document.removeEventListener('keydown', onKeyDown);
    };
  });

  function constructDiv_74722() {
    console.log('constructDiv_74722');
    var iframeDiv = document.createElement('div');
    iframeDiv.setAttribute(
      'id',
      '5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722'
    );
    iframeDiv.setAttribute('class', 'zf_main_id_74722');

    var closeFormDiv = document.createElement('div');
    closeFormDiv.setAttribute('id', 'deleteform_74722');
    closeFormDiv.setAttribute('class', 'zf_lb_closeform_74722');

    var containerDiv = document.createElement('div');
    containerDiv.setAttribute('id', 'containerDiv_74722');
    containerDiv.setAttribute('class', 'zf_lB_Container_74722 ');
    containerDiv.appendChild(iframeDiv);
    containerDiv.appendChild(closeFormDiv);

    var wrapperDiv = document.createElement('div');
    wrapperDiv.setAttribute('class', 'zf_lB_Wrapper_74722');
    wrapperDiv.appendChild(containerDiv);

    var dimmerDiv = document.createElement('div');
    dimmerDiv.setAttribute('class', 'zf_lB_Dimmer_74722');
    dimmerDiv.setAttribute('elname', 'popup_box');

    var mainDiv = document.createElement('div');
    mainDiv.setAttribute('id', 'formsLightBox_74722');
    mainDiv.style.display = 'none';
    mainDiv.appendChild(wrapperDiv);
    mainDiv.appendChild(dimmerDiv);
    console.log(mainDiv);

    // remove templateWidth class from mainDiv
    mainDiv.classList.remove('templateWidth');
    document.getElementById('zohodiv')?.appendChild(mainDiv);
    //document.body.appendChild(mainDiv);
  }

  function showZForm_74722(): void {
    var iframe = document
      .getElementById('5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722')
      ?.getElementsByTagName('iframe')[0];
    if (!iframe) {
      loadZForm_74722();
    }
    const formsLightBox = document.getElementById('formsLightBox_74722');
    if (formsLightBox) {
      formsLightBox.style.display = 'block';
      document.body.style.overflow = 'hidden';
    }
  }

  function loadZForm_74722(): void {
    const iframe = document
      .getElementById('5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722')
      ?.getElementsByTagName('iframe')[0];

    if (!iframe) {
      const f = document.createElement('iframe');
      f.src =
        ' https://forms.zohopublic.com/ace18/form/ClientDetails/formperma/5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ?zf_rszfm=1';
      f.style.border = 'none';
      f.style.minWidth = '100%';
      f.style.overflow = 'hidden';

      const d = document.getElementById(
        '5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722'
      );
      d?.appendChild(f);

      const deleteForm = document.getElementById('deleteform_74722');
      deleteForm?.addEventListener('click', deleteZForm_74722);

      window.addEventListener('message', (event) => {
        const evntData = event.data;
        if (evntData && typeof evntData === 'string') {
          const zf_ifrm_data = evntData.split('|');
          if (zf_ifrm_data.length === 2) {
            const zf_perma = zf_ifrm_data[0];
            const zf_ifrm_ht_nw = `${parseInt(zf_ifrm_data[1], 10) + 15}px`;
            const iframe = document
              .getElementById(
                '5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722'
              )
              ?.getElementsByTagName('iframe')[0];

            if (
              iframe &&
              iframe.src &&
              iframe.src.indexOf('formperma') > 0 &&
              iframe.src.indexOf(zf_perma) > 0
            ) {
              const prevIframeHeight = iframe.style.height;
              if (prevIframeHeight !== zf_ifrm_ht_nw) {
                iframe.style.minHeight = zf_ifrm_ht_nw;
                const containerDiv =
                  document.getElementById('containerDiv_74722');
                containerDiv?.setAttribute('style', `height: ${zf_ifrm_ht_nw}`);
              }
            }
          }
        }
      });
    }
  }

  function deleteZForm_74722(): void {
    const divCont = document.getElementById('formsLightBox_74722');
    if (divCont) {
      divCont.style.display = 'none';
      document.body.style.overflow = '';

      const iframe = document
        .getElementById('5E2cfI72PsdQNQPLSFjjOPpsUKdrebcYKYGHb8y7CNQ_74722')
        ?.getElementsByTagName('iframe')[0];
      iframe?.remove();
    }
    onRequestClose();
  }

  return (
    <div className='modalContainer'>
      <div className='loading-container'>
        <div className='loading-spinner'></div>
      </div>
      <div id='zohodiv'></div>
    </div>
  );
};

export default function ProposalForm() {
  const [isModalOpen, setModalIsOpen] = useState(false);

  const toggleModal = () => {
    setModalIsOpen(!isModalOpen);
  };

  return (
    <div className=''>
      {isModalOpen && <Modal onRequestClose={toggleModal} />}
      <Button
        onClick={toggleModal}
        className='capsule-hover capsule-button rounded-full bg-brand px-5 py-2 font-semibold text-white'
      >
        Request for Proposal
      </Button>
    </div>
  );
}
