import {
  render,
  fireEvent,
  screen,
  waitFor,
} from './test-utils';
import App from '../components/App';

describe('<App /> component: Render Navbar component.', () => {
  it('Display menu links', () => {
    render(<App />);
    expect(screen.getByTestId('linkROCKETS')).toBeInTheDocument();
    expect(screen.getByTestId('linkDRAGONS')).toBeInTheDocument();
    expect(screen.getByTestId('linkMISSIONS')).toBeInTheDocument();
    expect(screen.getByTestId('linkPROFILE')).toBeInTheDocument();
  });

  it('Display logo', () => {
    render(<App />);
    expect(screen.getByTestId('spaceTravelLogo')).toBeInTheDocument();
    expect(screen.getByText("Space Travelers' Hub")).toBeInTheDocument();
  });
});

describe('<App /> component: Render Rockets, Dragons, Missions, and Profile components', () => {
  it('Fetches Rockets to display in Rockets page when page loads the first time.', async () => {
    render(<App />);
    expect(await screen.findByText(/^Falcon 1$/i)).toBeInTheDocument();
    expect(await screen.findByText(/^Description Falcon 1$/i)).toBeInTheDocument();
  });

  it('Fetches Dragons to display in Dragons page by clicking on Dragons menu item.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkDRAGONS'));
    expect(await screen.findByText(/^Dragon 1$/i)).toBeInTheDocument();
    expect(await screen.findByText(/^Description Dragon 1$/i)).toBeInTheDocument();
  });

  it('Fetches Missions to display in Missions page by clicking on Missions menu item.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkMISSIONS'));
    expect(await screen.findByText(/^Thaicom$/i)).toBeInTheDocument();
    expect(await screen.findByText(/^Description Thaicom$/i)).toBeInTheDocument();
  });

  it('Display Profile page by clicking on Profile menu item.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkPROFILE'));
    expect(await screen.findByText(/^My Rockets$/i)).toBeInTheDocument();
    expect(await screen.findByText(/^My Dragons$/i)).toBeInTheDocument();
    expect(await screen.findByText(/^My Missions$/i)).toBeInTheDocument();
  });
});

describe('<App /> component: Booking and Joining', () => {
  it('Toggle Rocket Reserved badge by clicking on Reserve Rocket button, and it in turn changes its content to Cancel Reservation.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkROCKETS'));
    const reserveButton = await waitFor(() => screen.getByRole('button', { name: 'Reserve Falcon 1 rocket' }));
    expect(reserveButton.textContent).toBe('Reserve Rocket');

    fireEvent.click(reserveButton);
    const badgeActive = await screen.findByTestId('badgeActive');
    expect(badgeActive.textContent).toBe('Reserved');
    await waitFor(() => expect(screen.getByRole('button', { name: 'Cancel Falcon 1 rocket reservation' })).toBeInTheDocument());

    fireEvent.click(screen.getByRole('button', { name: 'Cancel Falcon 1 rocket reservation' }));
    expect(reserveButton.textContent).toBe('Reserve Rocket');
    expect(screen.queryByTestId('badgeActive')).toBeNull();
  });

  it('Toggle Dragon Reserved badge by clicking on Reserve Dragon button, and it in turn changes its content to Cancel Reservation.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkDRAGONS'));
    const button = await screen.findByTestId('dragon1');
    expect(button.textContent).toBe('Reserve Dragon');

    fireEvent.click(button);
    const badgeActive = await screen.findByTestId('badgeActive');
    expect(badgeActive.textContent).toBe('Reserved');
    expect(button.textContent).toBe('Cancel Reservation');

    fireEvent.click(button);
    expect(button.textContent).toBe('Reserve Dragon');
    expect(screen.queryByTestId('badgeActive')).toBeNull();
  });

  it('Toggle Joining Badge badge by clicking on Join Mission button, and it in turn changes its content to Leave Mission.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkMISSIONS'));
    const badgeMember = await screen.findByTestId('badgeMember');
    const button = await screen.findByTestId('9D1B7E0');
    expect(badgeMember.textContent).toBe('NOT A MEMBER');
    expect(button.textContent).toBe('Join Mission');

    fireEvent.click(button);
    expect(badgeMember.textContent).toBe('ACTIVE MEMBER');
    expect(button.textContent).toBe('Leave Mission');
  });
});

describe('<Profile component />', () => {
  it('List 1 joined Mission (Thaicom), 1 reserved Rocket (Falcon 1), and 0 reserved Dragons.', async () => {
    render(<App />);
    fireEvent.click(screen.getByTestId('linkROCKETS'));
    const buttonRocket = await screen.findByTestId('1');
    fireEvent.click(buttonRocket);

    fireEvent.click(screen.getByTestId('linkMISSIONS'));
    const buttonMission = await screen.findByTestId('9D1B7E0');
    fireEvent.click(buttonMission);

    fireEvent.click(screen.getByTestId('linkPROFILE'));
    const listReservedRockets = await screen.findAllByTestId('reservedRocket');
    const listJoinedMissions = await screen.findAllByTestId('joinedMission');
    const listReservedDragons = screen.queryAllByTestId('reservedDragon');

    expect(listReservedRockets.length).toBe(1);
    expect(listReservedRockets[0].textContent).toBe('Falcon 1');
    expect(listJoinedMissions.length).toBe(1);
    expect(listJoinedMissions[0].textContent).toBe('Thaicom');
    expect(listReservedDragons.length).toBe(0);
    expect(screen.getByText("You haven't booked any dragons yet.")).toBeInTheDocument();
  });
});
