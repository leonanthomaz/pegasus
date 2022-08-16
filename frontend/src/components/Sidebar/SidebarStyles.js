import styled from 'styled-components'

export const Container = styled.div`

border: 2px solid green;
float: right;
flex: 1;
max-width: 350px;

@media(max-width: 760px){
    display: none;
}

.sidebar {
  flex: 3;
  height: calc(70vh - 50px);
  overflow-y: scroll;
  position: sticky;
  top: 50px;
}

::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  background-color: #f1f1f1;
}
::-webkit-scrollbar-thumb {
  background-color: rgb(179, 179, 179);
}

.sidebarWrapper {
  padding: 20px;
}

.sidebarList {
  padding: 0;
  margin: 0;
  list-style: none;
}

.sidebarListItem {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.sidebarIcon {
  margin-right: 15px;
}

.sidebarButton {
  width: 150px;
  border: none;
  padding: 10px;
  border-radius: 5px;
  font-weight: 500;
}

.sidebarHr {
  margin: 20px 0;
}

.sidebarFriendList {
  padding: 0;
  margin: 0;
  list-style: none;
}

`;