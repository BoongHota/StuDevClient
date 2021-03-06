import React, { useEffect } from 'react'
import { useCookies } from 'react-cookie'
import { useSelector } from 'react-redux'
import * as S from './CreatePostStyle'
import { Header } from '../../components/Header'
import { CreateForm } from '../../containers/CreateForm'
import { Options } from '../../containers/Options'
import { CreatePostButton } from '../../containers/CreatePostButton'
import { RootState } from '../../modules'

const topics = [
  '백엔드',
  '프론트엔드',
  '프로젝트',
  '모바일',
  'CS',
  '프로그래밍언어',
]
const onOff = ['온라인', '오프라인']

type CreatePostProps = {
  props: any
}

function CreatePost({ props }: CreatePostProps) {
  const isCreated = useSelector(
    (state: RootState) => state.createPostReducer.isCreated
  )

  useEffect(() => {
    if (isCreated === 'success') {
      props.history.push('/')
    }
  }, [isCreated])

  // 헤더부분 수정해야됨
  return (
    <S.Container>
      <Header isMain={false} isSignPage={false} />
      <S.ContentBox>
        <CreateForm />
        <Options topics={topics} onOff={onOff} type="write" />
      </S.ContentBox>
      <CreatePostButton />
    </S.Container>
  )
}

export default CreatePost
