"use client"

import { toStringDate } from "@/lib/misc/dateFormatter";
import { deleteContactById, getAllContacts, markContactAsPending, markContactAsResponded } from "@/lib/services/contact.services";
import { Contact } from "@/lib/types/table.types";
import { useEffect, useState } from "react"
import { LuArrowRight, LuMoveRight, LuTrash } from "react-icons/lu";

import Badge from "@/components/ui/Badge";
import Button from "@/components/ui/Button";
import Modal from "@/components/ui/Modal";
import { capitalizedWords } from "@/lib/misc/capitalized";
import Link from "next/link";

export default function AdminContactsPage() {
  // Contacts
  const [contacts, setContacts] = useState<Contact[]>([]);

  // Contact detail state
  const [contactDetailState, setContactDetailState] = useState<Contact>({
    id: 0,
    created_at: "",
    email_address: "",
    full_name: "",
    message: null,
    phone_number: "",
    status: "",
    zip_code: 0
  });
  const [detailModal, setDetailModal] = useState(false);

  /**
   * Closes detial modal
   */
  function closeDetailModal() {
    setDetailModal(false);
  }

  /**
   * Opens detail modal
   */
  function openDetailModal() {
    setDetailModal(true);
  }

  /**
   * Resets contact detail state
   */
  function resetContactDetailState() {
    setContactDetailState({
      id: 0,
      created_at: "",
      email_address: "",
      full_name: "",
      message: null,
      phone_number: "",
      status: "",
      zip_code: 0
    });
  }

  /**
   * Handle mark contact as responded 
   * @param {number} idToMark
   */
  async function handleMarkContactAsResponded(idToMark: number) {
    if (contacts.length < 1) return;
    
    try {
      const res = await markContactAsResponded(idToMark);

      setContacts(prev =>
        prev.map(item =>
          item.id === res.id ? res : item
        )
      )
    } catch (err) {
      console.error(err);
    }
  }

   /**
   * Handle mark contact as pending
   * @param {number} idToMark
   */
  async function handleMarkContactAsPending(idToMark: number) {
    if (contacts.length < 1) return;
    
    try {
      const res = await markContactAsPending(idToMark);

      setContacts(prev =>
        prev.map(item =>
          item.id === res.id ? res : item
        )
      )
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Handle delete contact by ID
   * @param {number} idToDelete 
   */
  async function handleDeleteContactById(idToDelete: number) {
    try {
      const res = await deleteContactById(idToDelete);

      setContacts(prev =>
        prev.filter(item =>
          item.id !== res.id
        )
      )
    } catch (err) {
      console.error(err);
    }
  }

  /**
   * Handle open contact detail
   * @param {number} idToShow 
   * @returns {void}
   */
  function handleOpenContactDetail(idToShow: number) {
    resetContactDetailState();

    const updatedContacts = contacts.filter(item => item.id === idToShow);
    if (updatedContacts.length < 1) return;
    const foundItem = updatedContacts[0];

    setContactDetailState(foundItem);
    openDetailModal();
  }

  useEffect(() => {
    /**
     * Fetch all contacts
     */
    async function fetchAllContacts() {
      try {
        const res = await getAllContacts();

        setContacts(res);
      } catch (err) {
        console.error(err);
      }
    }

    // Call
    fetchAllContacts();
  }, []);
  
  return (
    <>
      <h1 className="font-manrope font-bold text-primary uppercase tracking-widest mb-6">Contacts</h1>

      <Modal title={`${capitalizedWords(contactDetailState.full_name)} Contact Detail`} show={detailModal} onClose={closeDetailModal}>
        <div className="flex flex-col md:grid md:grid-cols-2 md:grid-rows-2 gap-2 mb-2">
          <div className="p-4 shadow rounded-2xl space-y-1">
            <p className="uppercase tracking-wider text-sm opacity-75">Full Name</p>
            <p className="text-black">{contactDetailState.full_name}</p>
          </div>
          <div className="p-4 shadow rounded-2xl space-y-1 opacity-75">
            <p className="uppercase tracking-wider text-sm">Phone Number</p>
            <p className="text-black">{contactDetailState.phone_number}</p>
          </div>
          <div className="p-4 shadow rounded-2xl space-y-1 opacity-75">
            <p className="uppercase tracking-wider text-sm">Email Address</p>
            <p className="text-black">{contactDetailState.email_address}</p>
          </div>
          <div className="p-4 shadow rounded-2xl space-y-1 opacity-75">
            <p className="uppercase tracking-wider text-sm">Zip Code</p>
            <p className="text-black">{contactDetailState.zip_code}</p>
          </div>
        </div>
        <div className="rounded-2xl p-4 shadow space-y-1 h-56 overflow-y-auto mb-6">
          <p className="uppercase tracking-wider text-sm opacity-75">Message</p>
          <div className="text-black space-y-5">

            {contactDetailState.message?.split("\n").map((paragraph, index) =>
              <p key={`message-paragraph-${index}`}>{paragraph}</p>
            )}
          
          </div>
        </div>
        <div className="flex flex-row">
          <div>
            <p className="text-sm opacity-75">
              Date: <span>{toStringDate(contactDetailState.created_at)}</span>
            </p>
            <p className="text-sm opacity-75">
              Contact ID: <span>{contactDetailState.id}</span>
            </p>
          </div>
          <Button href={`mailto:${contactDetailState.email_address}`} size="sm" className="ms-auto font-semibold flex items-center justify-center gap-2">
            Reply to {contactDetailState.email_address} <LuMoveRight className="size-5" />
          </Button>
        </div>
      </Modal>

      <section>
        <div className="bg-white rounded-2xl">
          <div className="overflow-x-auto overflow-y-auto">
            <table className="w-full table-auto">
              <thead>
                <tr className="bg-gray-200/75">
                  <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Full name</th>
                  <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Date</th>
                  <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Status</th>
                  <th scope="col" className="py-4 px-6 font-manrope font-bold uppercase text-sm tracking-widest text-start">Actions</th>
                </tr>
              </thead>
              <tbody>

                {contacts.length > 0 && contacts.map((contact, index) => (
                  <tr key={`contact-item-${index}`}>
                    <th scope="row" className="p-6 text-start">{contact.full_name}</th>
                    <td>{toStringDate(contact.created_at)}</td>
                    <td>{contact.status === "pending" ? (
                      <Badge size="auto" variant="secondary" className="font-semibold capitalize">{contact.status}</Badge>
                    ) : (
                      <Badge size="auto" variant="neutral" className="font-semibold capitalize">{contact.status}</Badge>
                    )}</td>
                    <td>
                      <div className="flex items-center justify-start gap-2">
                        <Button size="auto" variant="primary" onClick={() => handleOpenContactDetail(contact.id)} className="font-semibold">Detail</Button>
                        {contact.status === "pending" ? (
                          <Button size="sm" variant="secondary" onClick={() => handleMarkContactAsResponded(contact.id)} className="font-semibold">
                            Mark as response
                          </Button>
                        ) : (
                          <Button size="sm" variant="inverted" onClick={() => handleMarkContactAsPending(contact.id)} className="font-semibold">
                            Mark as pending
                          </Button>
                        )}
                        <Button size="sm" variant="ghost" onClick={() => handleDeleteContactById(contact.id)} className="flex items-center justify-center gap-2 font-semibold">
                          <LuTrash className="size-5" /> Delete
                        </Button>
                      </div>
                    </td>
                  </tr>
                ))}

              </tbody>
            </table>
          </div>
        </div>
      </section>

    </>
  )
}