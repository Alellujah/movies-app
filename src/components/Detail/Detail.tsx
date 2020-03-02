import React, { Component } from 'react';
import { Modal, Backdrop, ModalContent, ModalRight, ModalLeft } from './styleComponents';
import { ButtonList } from '../List/styleComponents';

interface IDetailsProps {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  vote_average: number;
  overview: string;
  popularity: number;
  original_language: string;
  poster_path: string;
  showModal: boolean;
  onClose: () => void;
}

class Detail extends Component<IDetailsProps> {

  render() {
    const { title,
      original_title,
      release_date,
      vote_average,
      overview,
      popularity,
      original_language,
      poster_path,
      onClose,
      showModal } = this.props;
    return (
      <>
        {showModal &&
          <Backdrop>
            <Modal>
              <h1>{title} details</h1>
              <ModalContent>
                {poster_path &&
                  <ModalLeft>
                    <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  </ModalLeft>
                }
                <ModalRight>
                  <span>Original Title: {original_title}</span>
                  <span>Release Date: {release_date}</span>
                  <span>Popularity: {popularity}</span>
                  <span>Original Language: {original_language}</span>
                  <span>Vote Avg: {vote_average}</span>
                  <span>{overview}</span>
                </ModalRight>
              </ModalContent>
              <ButtonList onClick={onClose}>Close</ButtonList>
            </Modal>
          </Backdrop>
        }
      </>
    );
  }
}

export default Detail;