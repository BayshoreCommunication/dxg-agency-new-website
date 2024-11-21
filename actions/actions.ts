// 'use server';
import { SITECONFIG } from '../config/site';

const handleFormSubmit = async (formData: FormData) => {
  formData.append('xnQsjsdp', SITECONFIG.contact.xnQsjsdp);
  formData.append('xmIwtLD', SITECONFIG.contact.xmIwtLD);
  formData.append('actionType', SITECONFIG.contact.leadCampaign);
  formData.append('returnURL', SITECONFIG.contact.returnUrl);
  formData.append('Lead Source', SITECONFIG.contact.leadSource);

  try {
    const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: formData,
    });

    // Check if the response is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return 'success';
  } catch (error) {
    return 'error';
  }
};

const handleProposalFormSubmit = async (formData: FormData) => {
  formData.append('xnQsjsdp', SITECONFIG.proposal.xnQsjsdp);
  formData.append('xmIwtLD', SITECONFIG.proposal.xmIwtLD);
  formData.append('actionType', SITECONFIG.proposal.leadCampaign);
  formData.append('returnURL', SITECONFIG.proposal.returnUrl);
  formData.append('Lead Source', SITECONFIG.proposal.leadSource);
  formData.append('zc_gad', '');
  formData.append('ldeskuid', '');
  formData.append('LDTuvid', '');

  try {
    const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: formData,
    });

    // Check if the response is not OK
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    return 'success';
  } catch (error) {
    return 'error';
  }
};

const handleEventFormSubmit = async (formData: FormData) => {
  formData.append('xnQsjsdp', SITECONFIG.events.xnQsjsdp);
  formData.append('xmIwtLD', SITECONFIG.events.xmIwtLD);
  formData.append('actionType', SITECONFIG.events.leadCampaign);
  formData.append('returnURL', SITECONFIG.events.returnUrl);
  formData.append('Lead Source', SITECONFIG.events.leadSource);

  try {
    const response = await fetch('https://crm.zoho.com/crm/WebToLeadForm', {
      method: 'POST',
      body: formData,
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const result = await response.text();
    console.log('result', result);

    return 'success';
  } catch (error) {
    return 'error';
  }
};

export { handleFormSubmit, handleProposalFormSubmit, handleEventFormSubmit };
