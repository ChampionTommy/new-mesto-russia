import React, { useState } from 'react';
import Image from 'next/image';
import axios from '@/services';
import { Icon24Cancel, Icon36PictureOutline } from '@vkontakte/icons';
import { useDispatch } from 'react-redux';
import { type AppDispatch } from '@/redux/store';
import { closeModal } from '@/redux/slices/modal';
import { type ImageData } from '@/utils/interfaces';

const EditorBlock = () => {
  const dispatch = useDispatch<AppDispatch>();

  const [imageData, setImageData] = useState<ImageData>({
    title: null,
    imageUrl: null,
  });
  const handleTitleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = event.target.value;
    setImageData((prevState) => ({
      ...prevState,
      title: newTitle,
    }));
  };

  const handleChangeFile = async (event: any) => {
    try {
      const formData = new FormData();
      const file = event.target.files[0];
      formData.append('image', file);
      const { data } = await axios.post('/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      setImageData((prevImageData) => ({
        ...prevImageData,
        imageUrl: data.url,
      }));
    } catch (err) {
      console.warn(err);
      alert('Ошибка при загрузке файла!');
    }
  };
  const onClickRemoveImage = () => {
    setImageData({ imageUrl: null });
  };
  const onSubmit = async () => {
    try {
      await axios.post('/images', imageData);
      alert('Картинка добавлена');
      window.location.reload();
    } catch (err) {
      console.warn(err);
      alert('Ошибка при создании картинки!');
    }
  };
  console.log(imageData);
  return (
    <div className="editor">
      <div className="relative flex items-center text-xl leading-7 mx-8">
        <div>Создать запись</div>
        <button
          className="absolute right-0 icon-button h-[32px] w-[32px]"
          type="button"
          onClick={() => dispatch(closeModal())}
        >
          <Icon24Cancel color="#c9cccf" />
        </button>
      </div>
      <div className=" relative flex flex-col items-center text-center mx-autowill-change-default p-8">
        {imageData.imageUrl === null ? (
          <label
            htmlFor="dropzone-file"
            className="flex justify-center items-center w-full h-40 min-h-[100px] bg-[#ffffff0f] cursor-pointer rounded-[10px] hover:bg-[#00000024]"
          >
            <div className="flex flex-col items-center justify-center">
              <Icon36PictureOutline color="#c9cccf" />

              <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                <span className="font-semibold">Нажмите, чтобы добавить картинку</span>
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF</p>
            </div>
            <input
              id="dropzone-file"
              type="file"
              hidden
              value={imageData.imageUrl || ''}
              onChange={handleChangeFile}
            />
          </label>
        ) : (
          <div className="relative">
            <Image
              className="block bg-[#8c8c8c] pointer object-cover"
              src={process.env.SERVER_URL + imageData.imageUrl}
              alt="card"
              width={270}
              height={270}
            />
            <button
              onClick={onClickRemoveImage}
              type="submit"
              className="absolute top-[5px] right-[5px] icon-button hover:bg-[#ef000040] h-[32px] w-[32px]"
            >
              <Icon24Cancel color="#c9cccf" />
            </button>
          </div>
        )}
        <div className="flex flex-col text-left	w-full mt-8">
          <div className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Заголовок
          </div>
          <input
            type="text"
            placeholder="Введите заголовок"
            className="flex bg-[#ffffff0f] cursor-pointer rounded-[10px] h-[40px] p-3.5 hover:bg-[#00000024]"
            value={imageData.title || ''}
            onChange={handleTitleChange}
          />
        </div>
      </div>
      <div className="relative flex text-xl leading-7 mx-8">
        <button className="button" type="button" onClick={onSubmit}>
          Опубликовать
        </button>
      </div>
    </div>
  );
};

export default EditorBlock;
