'use client';
import { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { Authentification } from '../authentification';
import EditorBlock from '../editor';
import { HelperModalOpen, HelperModalType } from '@/utils/helpers';

export default function Modal() {
	const modalOpen = useSelector(HelperModalOpen);
	const modalType = useSelector(HelperModalType);
	const modalRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		document.body.style.overflow = modalOpen ? 'hidden' : 'unset';
	}, [modalOpen]);

	return (
		<div className={`${modalOpen ? '' : 'hidden'} modal-overlay animate-underlay`}>
			<div
				ref={modalRef}
				className={`${modalType === 'editor' ? 'flex py-5' : 'w-[460px]'
					} modal-window will-change-[opacity]`}
			>
				{modalType === 'auth' || modalType === 'register' ? (
					<Authentification authorizetype={modalType} />
				) : (
					<EditorBlock />
				)}
			</div>
		</div>
	);
}
