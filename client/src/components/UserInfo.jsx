import { ChangePassword } from './ChangePassword'
import { ModifyUserName } from './ModifyUserName'

export const UserInfo = () => {
    return <div>
        <div className="bg-white rounded-lg min-h-[100px] mt-2 p-2">
            <div className="semi-bold text-[18px]">
                Change your name
            </div>
            <div>
                <ModifyUserName/>
            </div>
        </div>
        <div className="bg-white rounded-lg min-h-[150px] mt-2 p-2">
            <div className="semi-bold text-[18px]">
                Change your password
            </div>
            <ChangePassword/>
        </div>
    </div>
}