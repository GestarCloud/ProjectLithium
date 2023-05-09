import { Dropdown, Avatar,Navbar, Button, Link, Text} from "@nextui-org/react";
import { Cloud } from '@mui/icons-material';



function userDrop({userObj}){
    return(
    <Dropdown placement="bottom-right">
            <Navbar.Item>
              <Dropdown.Trigger>
                <Avatar
                  bordered
                  as="button"
                  color="primary"
                  size="md"
                  src={userObj.avatar}
                />
              </Dropdown.Trigger>
            </Navbar.Item>
            <Dropdown.Menu
              aria-label="User menu actions"
              color="secondary"
              onAction={(actionKey) => console.log({ actionKey })}
            >
              <Dropdown.Item key="profile" css={{ height: "$18" }}>
                <Text b color="inherit" css={{ d: "flex" }}>
                  登录到
                </Text>
                <Text b color="inherit" css={{ d: "flex" }}>
                  {userObj.email}
                </Text>
              </Dropdown.Item>
              <Dropdown.Item key="settings" withDivider>
                我的设置
              </Dropdown.Item>
              <Dropdown.Item key="team_settings">Team Settings</Dropdown.Item>
              <Dropdown.Item key="analytics" withDivider>
                分析
              </Dropdown.Item>
              <Dropdown.Item key="system">System</Dropdown.Item>
              <Dropdown.Item key="configurations">Configurations</Dropdown.Item>
              <Dropdown.Item key="help_and_feedback" withDivider>
                帮助&反馈
              </Dropdown.Item>
              <Dropdown.Item key="logout" withDivider color="error">
                登出
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          )
}


export default function AppBar({userObj}) {

  return (
      <Navbar isBordered variant='sticky'>
        <Navbar.Brand>
          <Cloud/>
          <Text b color="inherit" hideIn="xs">
            Gestar Dashboard
          </Text>
        </Navbar.Brand css={{
            "@xs": {
              w: "12%",
            },
          }}>
        <Navbar.Content hideIn="xs" 
        enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="highlight-rounded">
          <Navbar.Link href="#">概览</Navbar.Link>
          <Navbar.Link href="#">商店</Navbar.Link>
          <Navbar.Link href="#">我的</Navbar.Link>
          <Navbar.Link href="#">工单</Navbar.Link>
        </Navbar.Content>
        <Navbar.Content css={{
            "@xsMax": {
              w: "100%",
              jc: "space-between",
            },
          }}>
          { userObj!==false&&('success' in userObj)=== ? (
            <userDrop/>
          )
          :(
          <>
          <Navbar.Link color="inherit" href="#">
            登录
          </Navbar.Link>
          <Navbar.Item>
            <Button auto flat as={Link} href="#">
              注册
            </Button>
          </Navbar.Item>
          </>
          )
          }
        </Navbar.Content>
      </Navbar>
      
);
}