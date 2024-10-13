"use client";

import styled from "styled-components";

export const TaskContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  width: 35rem;
  border-radius: 8px;
  align-items: center;
  border: 2px solid #d7dde9;
  padding: 2rem;
`;

export const TaskCardContent = styled.div`
  display: flex;
  width: 100%;
  padding: 1rem;
  justify-content: space-between;
  align-items: center;
  border: 2px dashed #d7dde9;
  border-radius: 8px;

  input {
    display: none;
    cursor: pointer;

    &:checked + label {
      background: black;
      -webkit-background-clip: text;
      color: transparent;
      position: relative;

      &::after {
        content: "";
        position: absolute;
        height: 1px;
        background: #555962;
        top: 50%;
        left: 2.5rem;
      }
    }

    &:checked + label::before {
      background: #ffffff;
      background-image: url("data:image/svg+xml,%0A%3Csvg xmlns='http://www.w3.org/2000/svg' width='25' height='25' viewBox='0 0 10 10'%3E%3Cg class='nc-icon-wrapper' stroke-width='0.5' fill='%23555555'%3E%3Cpath fill='none' stroke='%230796D3' stroke-linecap='round' stroke-linejoin='round' stroke-miterlimit='10' data-cap='butt' d='M2.83 4.72l1.58 1.58 2.83-2.83'/%3E%3C/g%3E%3C/svg%3E");
    }
  }

  label {
    cursor: pointer;
    user-select: none;
    position: relative;
    padding-left: 2.5rem;

    &::before {
      content: "";
      width: 24px;
      height: 24px;
      border-radius: 4px;
      background-color: white;
      border: 1px solid gray;
      display: inline-block;
      vertical-align: middle;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      margin-right: 1rem;
      margin-bottom: 3px;
    }
  }
`;

export const EditAndDeleteButtonsContainer = styled.div`
  display: flex;
  gap: 1rem;

  svg {
    &:hover {
      cursor: pointer;
    }
  }
`;
