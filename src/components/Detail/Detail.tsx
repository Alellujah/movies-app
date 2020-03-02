import React, { Component } from 'react';
import { Modal, Backdrop, ModalContent, ModalRight, ModalLeft, Lines, Row } from './styleComponents';
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
              <ModalContent>
                {poster_path &&
                  <ModalLeft>
                    <img alt={title} src={`https://image.tmdb.org/t/p/w500/${poster_path}`} />
                  </ModalLeft>
                }
                <ModalRight>
                  <h1>{title} details</h1>
                  <Row>
                  <Lines><span>Original Title: </span>{original_title}</Lines>
                  <Lines><span>Release Date: </span>{release_date}</Lines>
                  <Lines><span>Popularity:</span> {popularity}</Lines>
                  <Lines><span>Original Language:</span> {original_language}</Lines>
                  <Lines><span>Vote Avg:</span> {vote_average}</Lines>
                  </Row>
                  <Lines><span>Overview:</span> {overview}</Lines>
                  <ButtonList onClick={onClose}>Close</ButtonList>
                </ModalRight>
              </ModalContent>              
            </Modal>
          </Backdrop>
        }
      </>
    );
  }
}

export default Detail;