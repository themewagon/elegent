import { Avatar, AvatarGroup, Box, Button, Paper, Stack, Typography } from '@mui/material';
import Image from 'components/base/Image';

type ProjectCardProps = {
  image?: string;
  title: string;
  subtitle: string;
};

const ProjectCard = ({ image, title, subtitle }: ProjectCardProps) => {
  return (
    <Paper
      sx={(theme) => ({
        boxShadow: theme.shadows[5],
        borderRadius: theme.shape.borderRadius * 0.625,
      })}
    >
      <Stack>
        <Box component="figure" m={0} overflow="hidden">
          <Image src={image} width={1} height={1} />
        </Box>
        <Stack gap={1.25} padding={(theme) => theme.spacing(2.5, 0, 2.5, 2.5)}>
          <Typography variant="h6" component="h6" color={(theme) => theme.palette.text.primary}>
            {title}
          </Typography>
          <Typography variant="body1" component="p" color={(theme) => theme.palette.text.secondary}>
            {subtitle}
          </Typography>
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <AvatarGroup max={4}>
              <Avatar
                src=""
                sx={(theme) => ({
                  width: theme.spacing(3.125),
                  height: theme.spacing(3.125),
                })}
              />
              <Avatar
                src=""
                sx={(theme) => ({
                  width: theme.spacing(3.125),
                  height: theme.spacing(3.125),
                })}
              />
              <Avatar
                src=""
                sx={(theme) => ({
                  width: theme.spacing(3.125),
                  height: theme.spacing(3.125),
                })}
              />
              <Avatar
                src=""
                sx={(theme) => ({
                  width: theme.spacing(3.125),
                  height: theme.spacing(3.125),
                })}
              />
            </AvatarGroup>
            <Button variant="text">View Project</Button>
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default ProjectCard;
