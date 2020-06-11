import React from 'react';
import { render, fireEvent, cleanup, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { findFirstProp } from '../../../utils/reduxTestingFunctions'
import FriendOnList from './FriendOnList';

describe("FriendOnList", () => {

    afterEach(cleanup);

    const friend = {
        friend_profile_image: "",
        friend_username: "animecody",
        friend_bio: "DBZ all day bby",
        friends_id: 8
    };
    const deleteUserMessage = `Are you sure you want to remove ${friend.friend_username} from your friends list?`;
    const removeFriend = id => {
        console.log(`${id} was removed`)
    };

    it('renders text & values from props', () => {
        const { getByText, getAllByText } = render(<FriendOnList friends={friend} remove={removeFriend} />);

        const removeText = findFirstProp("Remove", getByText, getAllByText);
        const bioText = findFirstProp("DBZ all day bby", getByText, getAllByText);
        const usernameText = findFirstProp("animecody", getByText, getAllByText);

        expect(removeText).toBeInTheDocument();
        expect(bioText).toBeInTheDocument();
        expect(usernameText).toBeInTheDocument();
    });

    it('remove onClick toggles modalon', async () => {
        const { getByText, getAllByText } = render(<FriendOnList friends={friend} remove={removeFriend} />);
        const removeText = findFirstProp("Remove", getByText, getAllByText);

        fireEvent.click(removeText);

        const delMessage = await waitFor(() => getByText(new RegExp(deleteUserMessage, "i")))
        const okButton = getByText(/ok/i);
        const cancelButton = getByText(/cancel/i);

        expect(delMessage).toBeVisible();
        expect(okButton).toBeInTheDocument();
        expect(cancelButton).toBeInTheDocument();
    })

    it('modal cancel button onClick toggles modal off', async () => {
        const { getByText, getAllByText } = render(<FriendOnList friends={friend} remove={removeFriend} />);
        const removeText = findFirstProp("Remove", getByText, getAllByText);

        fireEvent.click(removeText);

        const delMessage = await waitFor(() => getByText(new RegExp(deleteUserMessage, "i")))
        const cancelButton = getByText(/cancel/i);
        const okButton = getByText(/ok/i);

        expect(delMessage).toBeVisible();
        expect(cancelButton).toBeInTheDocument();
        expect(okButton).toBeInTheDocument();

        fireEvent.click(cancelButton);

        await waitFor(() => delMessage)
        expect(cancelButton).not.toBeInTheDocument();
        expect(okButton).not.toBeInTheDocument();
    })

    it('modal OK button runs remove function from props', async () => {
        const { getByText, getAllByText } = render(<FriendOnList friends={friend} remove={removeFriend} />);
        const removeText = findFirstProp("Remove", getByText, getAllByText);
        console.log = jest.fn();

        fireEvent.click(removeText);

        const delMessage = await waitFor(() => getByText(new RegExp(deleteUserMessage, "i")))
        const cancelButton = getByText(/cancel/i);
        const okButton = getByText(/ok/i);

        expect(delMessage).toBeVisible();
        expect(cancelButton).toBeInTheDocument();
        expect(okButton).toBeInTheDocument();

        fireEvent.click(okButton);
        await expect(console.log).toHaveBeenCalledWith("8 was removed")
    })
})
