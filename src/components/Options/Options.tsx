import React, { useState } from 'react'
import * as S from './OptionsStyle'
import { CheckBox } from '../../element/CheckBox'
import CategoryIcon from '@material-ui/icons/Category'
import PersonAddIcon from '@material-ui/icons/PersonAdd'
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom'

const topics = [
  '백엔드',
  '프론트엔드',
  '프로젝트',
  '모바일',
  'CS',
  '프로그래밍언어',
]
const onOff = ['온라인', '오프라인']

function Options() {
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])
  const [selectedOnOff, setSelectedOnOff] = useState<string[]>([])

  const addTopics = (e: any) => {
    const topic = e.target.innerText
    if (selectedTopics.includes(topic)) {
      const filteredArr = selectedTopics.filter((each) => each !== topic)
      setSelectedTopics(filteredArr)
    } else {
      setSelectedTopics([...selectedTopics, topic])
    }
  }

  const addOnOff = (e: any) => {
    const type = e.target.innerText
    if (selectedOnOff.includes(type)) {
      const filteredArr = selectedOnOff.filter((each) => each !== type)
      setSelectedOnOff(filteredArr)
    } else {
      setSelectedOnOff([...selectedOnOff, type])
    }
  }

  return (
    <S.Container>
      <S.OptionBox>
        <S.Icon>
          <CategoryIcon />
          <span>카테고리</span>
        </S.Icon>
        <S.Topic>
          {topics.map((topic) => (
            <CheckBox
              text={topic}
              selected={selectedTopics.includes(topic)}
              handleClick={addTopics}
              key={topic}
            />
          ))}
        </S.Topic>
      </S.OptionBox>
      <S.OptionBox>
        <S.Icon>
          <PersonAddIcon />
          <span>모임인원</span>
        </S.Icon>
        <S.Participant>
          <input type="text" />
          <span>명</span>
        </S.Participant>
      </S.OptionBox>
      <S.OptionBox>
        <S.Icon>
          <MeetingRoomIcon />
          <span>모임방식</span>
        </S.Icon>
        <S.OnOff>
          {onOff.map((type) => (
            <CheckBox
              text={type}
              selected={selectedOnOff.includes(type)}
              handleClick={addOnOff}
              key={type}
            />
          ))}
        </S.OnOff>
      </S.OptionBox>
    </S.Container>
  )
}

export default Options
